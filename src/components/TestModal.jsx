import { useModal } from "@/utils/useModal"
import { HeightType } from "@/utils/constants";

const Modal = () => {
  const { openModal } = useModal();

  const Modal1 = () => {
    const { closeModal } = useModal();
    return (
      <>
        <div style={{color: "Black"}}>Hey</div><div >Hey</div>
        <div onClick = {() => {
          closeModal({msg: "Self Modal Closed"})
        }}>Close</div>
      </>
    )
  }

  return (
    <>
      <div style={{color: "Black"}}>Hey</div><div >Hey</div>
      <div onClick = {() => {
        openModal({
          content: {
            component: <Modal1 />
          },
          modalConfig: {
            contentConfig: {
              backgroundColor: "255,255,0",
              padding: 15,
              heightType: HeightType.CUSTOM,
              height: 70,
              topRightBorderRadius: 50,
              topLeftBorderRadius: 50
            }
          }
        })
      }}>Close</div>
    </>
  )
}

export default Modal;
