import Link from "next/link";
export type ModalProps = {
  title: string;
  message: string;
  link: string;
};

export default function CompletionModal({ title, message, link }: ModalProps) {
  return (
    <>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{message}</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          <Link href={link}>Let's Battle</Link>
        </label>
      </div>
    </>
  );
}
