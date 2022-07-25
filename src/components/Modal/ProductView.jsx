import styled from "styled-components";
import ProductView from "../productInfo";

function ModalView() {
  return (
    <>
      <Backdrop />
      <Modal>
        <img src="./images/icon-close.svg" alt="close" />
        <ProductView />
      </Modal>
    </>
  );
}

const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    text-align: right;
  }
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.75);
`;
export default ModalView;
