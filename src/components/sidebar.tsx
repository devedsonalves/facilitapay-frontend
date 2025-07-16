import {
  ChevronDown,
  HandCoins,
  Info,
  LayoutDashboard,
  Settings,
  UsersRound,
  Banknote,
  LogOut,
} from "lucide-react";

const SideBar = () => {
  const navItems = [
    { icon: <LayoutDashboard />, label: "Dashboard" },
    {
      icon: <UsersRound />,
      label: "Clientes",
      subItems: true,
    },
    { icon: <Banknote />, label: "Pagamentos", subItems: true },
    { icon: <Settings />, label: "Configurações" },
    { icon: <Info />, label: "Ajuda" },
  ];

  const user = {
    nome: "João Silva",
    empresa: "João Enterprise",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToT-wkgmNrfJSJc1OnOmPsJwX04mfoGy4BIA&s",
  };
  return (
    <>
      <div className="w-[20%] bg-card p-[10px] rounded-md border border-border flex-1 h-[calc(100vh-20px)] flex flex-col">
        <div className="flex items-center gap-[9px]">
          <img
            src="../public/logo.png"
            alt="logo"
            className="w-[50px] rounded-[30%]"
          />
          <h2 className="font-bold text-[22px]">Facilita Pay</h2>
        </div>
        <div className="mt-[70px] flex flex-col gap-[20px] w-full">
          {navItems.map((item, index) => (
            <div key={index} className="flex items-center gap-[10px] w-full ">
              <p>{item.icon}</p>
              <a href="">{item.label}</a>
              {item.subItems && (
                <p className="flex-1  flex justify-end">
                  <ChevronDown className="flex justify-end" />
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-auto flex items-center w-full ">
          <div>
            <img
              src={user.foto}
              alt=""
              className="w-[50px] h-[50px] rounded-[100%]"
            />
          </div>
          <div className="ml-2">
            <p className="font-bold">{user.nome}</p>
            <p>{user.empresa}</p>
          </div>
          <div className="flex justify-end flex-1">
            <LogOut />
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
