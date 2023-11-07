import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, Button ,DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";


import {AcmeLogo} from "./AcmeLogo.jsx";
export type NavBarProps = {
}

const NavBar: React.FC<NavBarProps>  = ({}) => {
	return (
		<Navbar>
		  <NavbarBrand>
			<AcmeLogo />
			<p className="font-bold text-inherit">FGD</p>
		  </NavbarBrand>
	
		  <NavbarContent className="hidden sm:flex gap-4" justify="center">

			<Button onClick={() => window.location.href = "/recetas"} color="secondary" className='text-white hover:text-secondary-200' variant="light">
			Recetas
		</Button> 
			<Button  onClick={() => window.location.href = "/ingredientes"} color="secondary" className='text-white hover:text-secondary-200'  variant="light">
			Ingredientes
		</Button> 
			<Button  onClick={() => window.location.href = "/menus"}  color="secondary" className='text-white hover:text-secondary-200' variant="light">
			Menu
		</Button> 
			{/* <Button  onClick={() => window.location.href = "/compras"} color="secondary" className='text-white hover:text-secondary-200' variant="light">
			Lista de Compras
		</Button>  */}
		  </NavbarContent>
	
		  <NavbarContent className="sm:hidden" as="div" justify="end">
			<Dropdown placement="bottom-end">
			  <DropdownTrigger >
				<Avatar
				  isBordered
				  as="button"
				  className="transition-transform"
				  color="secondary"
				  name="Jason Hughes"
				  size="sm"
				  src="https://raw.githubusercontent.com/CrisisTecno/CrisisTecno/main/assets/eseCristhian.png"
				/>
			  </DropdownTrigger>
			  <DropdownMenu aria-label="Profile Actions" variant="flat">

				<DropdownItem key="profile" className="h-14 gap-2">
				  <p className="font-semibold">Holap!! Cristhian </p>
				  <p className="font-semibold">Que Quieres Hacer Hoy?</p>
				</DropdownItem>
				<DropdownItem href="/recetas" className="text-secondary-200" key="settings">Recetas</DropdownItem>
				<DropdownItem href="/ingredientes" className="text-secondary-200" key="team_settings">Ingredientes</DropdownItem>
				<DropdownItem href="/menus" className="text-secondary-200" key="analytics">Menu</DropdownItem>
				{/* <DropdownItem href="/compras" className="text-secondary-200" key="system">Lista de Compras</DropdownItem> */}
			  </DropdownMenu>
			</Dropdown>
		  </NavbarContent>
		</Navbar>
	  );
};

export default NavBar;


