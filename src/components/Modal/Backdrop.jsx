import styled from "styled-components";
import { ProductView } from "../productInfo";
const Backdrop = ({ setModal, showProductModal, hideNav }) => {
  return (
    <Drop onClick={() => hideNav(false)}>
      {showProductModal && (
        <ProductView setShowModal={setModal} showArrows={true}>
          <svg
            onClick={() => {
              setModal(false);
            }}
            className="exit"
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="hsl(25, 100%, 94%)"
              fillRule="evenodd"
            />
          </svg>
        </ProductView>
      )}
    </Drop>
  );
};

const Drop = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsl(0, 0%, 0%, 0.75);
  .exit {
    position: absolute;
    top: -20px;
    right: 0;
  }
  .exit:hover path {
    fill: var(--Orange);
  }
`;

export default Backdrop;
