import {PropsWithChildren} from "react";
import Title from "@/components/Title/Title";
import {useLayoutStore} from "@/store/layoutStore";

interface IProps {
}

const MainLayout = ({children}: PropsWithChildren<IProps>) => {
  const {title, goBack,} = useLayoutStore((state) => ({
    title: state.title,
    goBack: state.goBack,
  }));

  return (
    <>
      <Title text={title} showBackButton={goBack}/>
      {children}
    </>
  );
};

export default MainLayout;
