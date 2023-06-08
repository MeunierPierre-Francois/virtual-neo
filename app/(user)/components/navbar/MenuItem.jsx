"use client";

const MenuItem = ({ onClick, label }) => {
  return (
    <div onClick={onClick} className="hover:text-white">
      {label}
    </div>
  );
};

export default MenuItem;
