import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addExercise,
  deleteExercise,
  fetchExercises,
} from "../../redux/actions";
import { useState } from "react";
import { AddExerciseForm, ModalProvider } from "../../components";

const dummyExercise = {
  name: "exercise name",
  duration: 10,
  caloriesBurned: 200,
};

export default function Exercises() {
  const dispatch = useDispatch();
  const { exercises } = useSelector((state) => state.exercises);
  const isLoading = useSelector((state) => state.loading);
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  console.log({ exercises });

  return !isLoading ? (
    <section className="mx-auto flex max-w-[1100px] flex-col gap-8 p-6">
      <h1 className="text-center text-4xl">Exercises</h1>
      <div className="text-center">
        <button onClick={openModal}>Add exercise</button>
        <ModalProvider closeModal={closeModal} open={open}>
          <AddExerciseForm closeModal={closeModal} />
        </ModalProvider>
      </div>
      <section className="flex flex-wrap justify-center gap-8">
        {exercises?.map((ex) => (
          <ExerciseCard exercise={ex} key={ex._id} />
        ))}
      </section>
    </section>
  ) : (
    <section className="grid h-[80vh] w-full place-items-center">
      <p>Loading...</p>
    </section>
  );
}

function ExerciseCard({ exercise }) {
  const dispatch = useDispatch();

  const { _id, name, duration, caloriesBurned, createdAt } = exercise;

  return (
    <div className="flex w-[250px] flex-col gap-2 rounded-md border p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>Duration: {duration}min</p>
      <p>Calories Burned: {caloriesBurned}</p>
      <small className="text-xs text-slate-500">
        {new Intl.DateTimeFormat("en-IN", {
          dateStyle: "full",
          timeStyle: "long",
        }).format(new Date(createdAt))}
      </small>
      <button
        onClick={() => dispatch(deleteExercise(_id))}
        className="mt-auto rounded-md border py-1"
      >
        delete
      </button>
    </div>
  );
}
