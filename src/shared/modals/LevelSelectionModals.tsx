import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogBody,
} from "@/components/ui/dialog";

// interface LevelSelectionModalsProps {
//   isOpen: (open: boolean) => void;
// }

const LevelSelectionModals = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Level Selection</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <div>
          <h1>
            <DialogDescription>
              <p>
                Select a level to play. The higher the level, the more
                challenging the game will be.
              </p>
            </DialogDescription>
          </h1>
        </div>
      </DialogBody>
    </DialogContent>
  );
};

export default LevelSelectionModals;
