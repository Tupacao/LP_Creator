import ElementFooter from "./elementFooter/ElementFooter";
import ElementHeader from "./elementHeader/ElementHeader";

export default function ElementLibrary() {
  return (
    <>
      <ElementHeader position={0}/>
      <ElementFooter position={1}/>
    </>
  );
}
