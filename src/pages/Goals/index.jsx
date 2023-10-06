import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGoal, fetchGoals } from "../../redux/actions";
import { useEffect } from "react";
import { useState } from "react";
import { AddExerciseForm, AddGoalForm, ModalProvider } from "../../components";

export default function Goals() {
  const dispatch = useDispatch();
  const { goals } = useSelector((state) => state.goals);
  const isLoading = useSelector((state) => state.loading);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  console.log({ goals });

  return !isLoading ? (
    <section className="mx-auto flex max-w-[1100px] flex-col gap-8 p-6">
      <h1 className="text-center text-4xl">Goals</h1>
      <div className="text-center">
        <button onClick={openModal}>Add goal</button>
        <ModalProvider closeModal={closeModal} open={open}>
          <AddGoalForm closeModal={closeModal} />
        </ModalProvider>
      </div>
      <section className="flex flex-wrap justify-center gap-8">
        {goals?.map((goal) => (
          <GoalCard goal={goal} key={goal._id} />
        ))}
      </section>
    </section>
  ) : (
    <section className="grid h-[80vh] w-full place-items-center">
      <p>Loading...</p>
    </section>
  );
}

function GoalCard({ goal }) {
  const dispatch = useDispatch();

  const {
    _id,
    name,
    description,
    status,
    targetCalories,
    targetDate,
    createdAt,
  } = goal;

  return (
    <div className="flex w-[250px] flex-col gap-2 rounded-md border p-4 capitalize">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>Description: {description}</p>
      <p>Target Calories: {targetCalories}</p>
      <p>Target Date: {targetDate}</p>
      <p>Status: {status}</p>
      <small className="text-xs text-slate-500">
        {new Intl.DateTimeFormat("en-IN", {
          dateStyle: "full",
          timeStyle: "long",
        }).format(new Date(createdAt))}
      </small>
      <button
        onClick={() => dispatch(deleteGoal(_id))}
        className="mt-auto rounded-md border py-1"
      >
        delete
      </button>
    </div>
  );
}
