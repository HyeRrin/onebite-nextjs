import { ReactNode } from "react";

// search의 모든 하위 경로에 적용됨
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>임시 서치바</div>
      {/* 페이지 컴포넌트 */}
      {children}
    </div>
  );
};

export default Layout;
