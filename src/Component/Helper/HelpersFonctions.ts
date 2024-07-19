
export const filterData=(data:any,value:any)=>{
     const dataFilted=data.filter((datas:any) =>
        datas.typeActivite.toLowerCase().includes(value.toLowerCase())
      );

      return dataFilted;
}
