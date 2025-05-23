export default function Footer({alumn} : {alumn: string}) {
  return (
    <footer className="w-full italic text-xs font-semibold pt-60 pb-16 text-center px-2">
      {new Date().getFullYear()} - {alumn}
    </footer>
  );
}
