type DataObject = {
    url: string;
};
  
export type DataArray = Array<DataObject>;

type TodoObject = {
    text: string;
    complete: boolean;
};

export type TodoArray = Array<TodoObject>;