"use client";

import { muscleList } from "@/lib/variables";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SelectMuscle() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("muscle", value);
    } else {
      params.delete("muscle");
    }
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      title="selected-muscle"
      name="selected-muscle"
      className="border-none bg-transparent text-xl rounded-lg outline-none font-medium w-full"
      defaultValue={searchParams.get("muscle")?.toString()}
      onChange={(e) => handleChange(e.target.value)}
    >
      <option value="">Select muscle</option>
      {muscleList.map((muscle) => (
        <option key={muscle} value={muscle}>
          {muscle}
        </option>
      ))}
    </select>
  );
}
