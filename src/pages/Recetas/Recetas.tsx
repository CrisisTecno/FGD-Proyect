import React, { useState } from 'react';
import {Button, Card, CardBody, CardFooter, Image,Modal,ModalBody,ModalContent,ModalFooter,ModalHeader,Textarea, useDisclosure} from "@nextui-org/react";
import { data } from '../../data/data';
export type RecetasProps = {
}

const Recetas: React.FC<RecetasProps>  = ({}) => {
	const {isOpen, onOpen, onOpenChange} = useDisclosure();
	const [id, setId] = useState(0);

	const list=data.recetas;
	const ingredientes=data.ingredientes;

	function obtenerIngredientesDeReceta(): string {
		const receta =list.find((receta) => receta.id === id);
		if (receta) {
		  const ingredientesIds = receta.ingredientes;
		  const detallesIngredientes: string[] = [];
	  
		  for (const ingredienteId of ingredientesIds) {
			const ingrediente = ingredientes.find((ingrediente) => ingrediente.id === ingredienteId);
			if (ingrediente) {
			  detallesIngredientes.push(ingrediente.nombre);
			}
		  }
		  return detallesIngredientes.join("\n");
		} else {
		  return "";
		}
	  }
	  function obtenerNombre():string[]{
		const aux:string []=[];
		const receta =list.find((receta) => receta.id === id);
		if(receta!=undefined){
			aux.push(receta.nombre);
			aux.push(receta.instrucciones);
			return aux;
		}else{
			return [];
		}
	  }
	return (
		
		<div className="gap-2 grid grid-cols-2 sm:grid-cols-4 mx-10">
		  {list.map((item, index) => (
			<Card shadow="sm" key={index} isPressable onPress={()=>{
				onOpen();
				setId(index+1);
			}}>
			  <CardBody className="overflow-visible p-0">
				<Image
				  shadow="sm"
				  radius="lg"
				  width="100%"
				  alt={item.nombre}
				  className="w-full object-cover h-[140px]"
				  src={item.foto}
				/>
			  </CardBody>
			  <CardFooter className="text-small justify-between">
				<b className="text-secondary-200">{item.nombre}</b>
				<p className="text-default-500">{item.id}</p>
			  </CardFooter>
							<Textarea
					isReadOnly	
					label="Preparacion:"
					variant="bordered"
					labelPlacement="outside"
					value={item.instrucciones}
					defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
					className="max-w-xs"
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
								{obtenerNombre()[0]}
							</ModalHeader>
							<ModalBody>
									<Textarea
							isReadOnly	
							label="Preparacion:"
							variant="bordered"
							labelPlacement="outside"
							value={obtenerNombre()[1]}
							defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
							className="max-w text-secondary-200 text-center"
							/>
										<Textarea
								isReadOnly	
								label="Ingredientes:"
								variant="bordered"
								labelPlacement="outside"
								value={obtenerIngredientesDeReceta()}
								defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
								className="max-w text-secondary-200 text-center"
								/>
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
	  );
};
export default Recetas;