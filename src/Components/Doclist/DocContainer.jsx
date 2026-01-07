import DocList from "@/Components/Doclist/DocList";
import NotFound from "@/Components/Utilities/NotFound";
import React, { Suspense } from "react";

const DocContainer = ({ docInfoData }) => {
  return (
    <div className="sm:px-5 lg:px-20 flex flex-col items-center space-y-4">
      <h1 className="font-primary font-extrabold text-[25px] md:text-[36px]">
        Our Best Doctors
      </h1>
      <p className="w-75 sm:w-full font-primary text-center text-[13px] md:text-[16px] opacity-60">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        {Array.isArray(docInfoData) && docInfoData.length > 0 ? (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {docInfoData?.map((doc) => (
              <DocList key={doc?.id} doc={doc} />
            ))}
          </div>
        ) : (
          <NotFound
            title="No doctors available"
            message="We couldn't find any doctors to display right now. Please check back later."
          />
        )}
      </Suspense>
    </div>
  );
};

export default DocContainer;
