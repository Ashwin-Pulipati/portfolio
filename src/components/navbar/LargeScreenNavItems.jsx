import React from "react";

const LargeScreenNavItems = ({ renderNavItems }) => {
  return (
    <ul className="hidden lg:inline-flex items-center gap-6">
      {renderNavItems(false)}
    </ul>
  );
};

export default React.memo(LargeScreenNavItems);
