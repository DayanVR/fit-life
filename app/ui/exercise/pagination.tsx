"use client";

import { fetchExerciseLength } from "@/lib/data";
import { useExercisesStore } from "@/lib/store";
import { Pagination } from "flowbite-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Component({
  currentPage,
  limit,
  query = "",
  muscle = "",
}: {
  currentPage: number;
  limit: number;
  query?: string;
  muscle?: string;
}) {
  const { totalPages, setTotalPages } = useExercisesStore();

  const searchparams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    fetchExerciseLength({ query, limit, muscle })
      .then((pages) => {
        setTotalPages(pages);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchparams]);

  const onPageChange = (page: number) => {
    const params = new URLSearchParams(searchparams);
    params.set("page", page.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex overflow-x-auto sm:justify-center pt-8">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
