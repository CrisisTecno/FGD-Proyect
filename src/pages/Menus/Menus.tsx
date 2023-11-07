
import React, { useState } from 'react';
import {Button, Card, CardBody, CardFooter, Image,Input,Modal,ModalBody,ModalContent,ModalFooter,ModalHeader,Textarea, useDisclosure} from "@nextui-org/react";
import { data } from '../../data/data';
import {Listbox, ListboxItem, Avatar} from "@nextui-org/react";

export type MenusProps = {
}
type Menu = {
	id: number;
	nombre: string;
	descripcion: string;
	platos: Plato[];
  };
  
  type Plato = {
	receta_id: number;
	porciones: number;
  };
  interface Ingredientes {
    id: number;
    nombre: string;
    ingredientes: number[];
    instrucciones: string;
    foto: string;
  }
const Menus: React.FC<MenusProps>  = ({}) => {
	const [id, setId] = useState(1);
	const {isOpen, onOpen, onOpenChange} = useDisclosure();

	const menus=data.menus;
	const recetas=data.recetas;




	function obtenerRecetasDeMenu(): string   {

		const menu: Menu | undefined = menus.find((menu) => menu.id === id);
            if (menu !== undefined) {
                if (menu) {
                    const nombresRecetas: string[] = [];
                    const recetasIds = menu.platos.map((plato) => plato.receta_id);
                    
                     for(const recetaId of recetasIds){
                        const receta=recetas.find((receta)=>receta.id===recetaId);
                        if(receta){
                            nombresRecetas.push('*'+receta.nombre);
                        }
                    }
                    return nombresRecetas.join("\n");
                  } else {
                    return "";
                  }
            }else {
                return "";
              }
		
	  }
	//   function obtenerNombre():string[]{
	// 	const aux:string []=[];
	// 	const receta =list.find((receta) => receta.id === id);
	// 	if(receta!=undefined){
	// 		aux.push(receta.nombre);
	// 		aux.push(receta.instrucciones);
	// 		return aux;
	// 	}else{
	// 		return [];
	// 	}
	//   }
	return (<>
    <div className='flex justify-evenly items-center '>
		<p className='block my-16 text-center text-secondary text-3xl'>MENUS</p>
        <Button color="secondary" variant="light" onPress={()=>{
				onOpen();
			}}>
        Nuevo Menu
      </Button>  
        </div>
		<div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mx-10">
			
		  {menus.map((item, index) => (
			<Card shadow="sm" key={index} isPressable onPress={()=>{
				setId(index+1);
			}}>
			  <CardFooter className="text-small justify-between">
				<b className="text-secondary-200">{item.nombre}</b>
				<p className="text-default-500">{item.id}</p>
			  </CardFooter>
							<Textarea
					isReadOnly	
					label="Descripcion:"
					variant="bordered"
					labelPlacement="outside"
					value={item.descripcion}
					defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
					className="max-w text-secondary-200 text-center"
							/>
					<Textarea
					isReadOnly	
					label="Recetas:"
					variant="bordered"
					labelPlacement="outside"
					value={obtenerRecetasDeMenu()}
					defaultValue="Sin Recetas"
					className="max-w text-secondary-200 text-center"
							/>
				 <Modal
						isOpen={isOpen}
						onOpenChange={onOpenChange}
						scrollBehavior='normal'
					>
						<ModalContent>
						{(onClose) => (
							<>
							<ModalHeader className="flex flex-col gap-1 text-secondary text-center">
								Creemos un Nuevo Menu
							</ModalHeader>
							<ModalBody>
                            <Input type="text" variant="faded" label="Nombre del Menu" placeholder="Ingrese el Nuevo Nombre del Menu" />
                            <Input type="text" variant="faded" label="Descripcion" placeholder="De una breve del Menu" />
                            
                            <div className="w-full max-w border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
      
                    <Listbox
                        classNames={{
                        base: "max-w-xs",
                        list: "max-h-[300px] max-w-[400px] overflow-scroll",
                        }}
                        defaultSelectedKeys={["1"]}
                        items={recetas}
                        label="Assigned to"
                        selectionMode="multiple"
                        variant="flat"
                    >
                        {(item) => (
                        <ListboxItem key={item.id} textValue={item.nombre}>
                            <div className="flex gap-2 items-center">
                            <Avatar alt={item.nombre} className="flex-shrink-0" size="sm" src={item.foto} />
                            <div className="flex flex-col">
                                <span className="text-small">{item.nombre}</span>
                                <span className="text-tiny text-default-400">{item.instrucciones}</span>
                            </div>
                            </div>
                        </ListboxItem>
                        )}
                    </Listbox>
    </div>
										
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
								Close
								</Button>
							</ModalFooter>
							</>
						)}
						</ModalContent>
					</Modal> 
			</Card>
			

		  ))}
		</div>
		</>
	  );
};
export default Menus;