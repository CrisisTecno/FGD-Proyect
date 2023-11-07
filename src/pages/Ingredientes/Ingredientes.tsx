import React from 'react';

import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
import {data} from "../../data/data";

export type IngredientesProps = {
}

const Ingredientes: React.FC<IngredientesProps>  = ({}) => {

  const [page, setPage] = React.useState(1);
  const rowsPerPage = 8;
const users= data.ingredientes;
  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  return (
	<>
	<p className='block my-4 text-center text-secondary text-3xl'>INGREDIENTES</p>
	<div className='mx-10'>
    <Table 
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="id">ID</TableColumn>
        <TableColumn key="nombre">NOMBRE</TableColumn>
        <TableColumn key="foto">FOTO</TableColumn>
        <TableColumn key="cantidad_disponible">CANTIDAD DISPONIBLE</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
	</div>
	</>
  );
}
export default Ingredientes;