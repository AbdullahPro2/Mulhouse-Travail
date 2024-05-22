function PageHeading({ text }) {
  return (
    <>
      <h1 className="mt-8 text-center text-2xl font-black tracking-widest text-[#1b64ac] lg:text-3xl">
        {text}
      </h1>
      <div className="mx-auto mb-10 mt-3  w-12 rounded-md border-[2px] border-[#1b64ac]"></div>
    </>
  );
}

export default PageHeading;
