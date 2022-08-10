import styled from "styled-components";

function ToggleButton({ setNav }) {
  return (
    <Toggle onClick={setNav}>
      <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
          fill="#69707D"
          fillRule="evenodd"
        />
      </svg>
    </Toggle>
  );
}

const Toggle = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: inline-flex;
    margin-right: 1rem;
  }
`;

export default ToggleButton;
