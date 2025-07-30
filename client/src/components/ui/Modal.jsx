// src/components/ui/Modal.jsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function Modal({
  title,
  description,
  children,
  onClose,
  onConfirm,
  confirmText = "Save",
  confirmClass = "bg-blue-600 hover:bg-blue-700",
}) {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="text-gray-400">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">{children}</div>
        <DialogFooter>
          <Button onClick={onClose} variant="ghost" className="text-gray-400">
            Cancel
          </Button>
          <Button onClick={onConfirm} className={confirmClass}>
            {confirmText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
