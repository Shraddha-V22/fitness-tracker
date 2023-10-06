import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFood, deleteFood, fetchFood } from "../../redux/actions";
import { AddFoodForm, ModalProvider } from "../../components";
import { useState } from "react";

export default function Food() {
  const dispatch = useDispatch();
  const { food } = useSelector((state) => state.food);
  const isLoading = useSelector((state) => state.loading);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  console.log({ food });

  return !isLoading ? (
    <section className="mx-auto flex max-w-[1100px] flex-col gap-8 p-6">
      <h1 className="text-center text-4xl">Food</h1>
      <div className="text-center">
        <button onClick={openModal}>Add food</button>
        <ModalProvider closeModal={closeModal} open={open}>
          <AddFoodForm closeModal={closeModal} />
        </ModalProvider>
      </div>
      <section className="flex flex-wrap justify-center gap-8">
        {food?.map((item) => (
          <FoodCard food={item} key={item._id} />
        ))}
      </section>
    </section>
  ) : (
    <section className="grid h-[80vh] w-full place-items-center">
      <p>Loading...</p>
    </section>
  );
}

function FoodCard({ food }) {
  const dispatch = useDispatch();
  const { _id, name, calories, carbsInGms, proteinInGms, fatInGms, createdAt } =
    food;
  return (
    <div className="flex w-[250px] flex-col gap-2 rounded-md border p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>Calories: {calories}</p>
      <p>Protein: {proteinInGms}gms</p>
      <p>Carbohydrates: {carbsInGms}gms</p>
      <p>Fat: {fatInGms}gms</p>
      <small className="text-xs text-slate-500">
        {new Intl.DateTimeFormat("en-IN", {
          dateStyle: "full",
          timeStyle: "long",
        }).format(new Date(createdAt))}
      </small>
      <button
        onClick={() => dispatch(deleteFood(_id))}
        className="mt-auto rounded-md border py-1"
      >
        delete
      </button>
    </div>
  );
}
