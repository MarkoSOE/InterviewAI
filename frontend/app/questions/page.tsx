import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";

async function QuestionsData() {
  const supabase = await createClient();
  const { data: questions, error } = await supabase
    .from("questions")
    .select()
    .eq("module_id", "1");

  if (error) {
    return <p>Error loading instruments: {error.message}</p>;
  }

  return <pre>{JSON.stringify(questions, null, 2)}</pre>;
}

export default function Questions() {
  return (
    <Suspense fallback={<div>Loading Questions...</div>}>
      <QuestionsData />
    </Suspense>
  );
}
