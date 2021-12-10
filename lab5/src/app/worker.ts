export class WebWorker {
  data: any = [];
  fetchData = async () => {
    const newData: any = await fetch(
      'http://jsonplaceholder.typicode.com/todos',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      }
    );
    const processed = await newData.json();
    console.log(processed)
    this.data = processed
  }
  
  fetchDataWrapper = async (url: any) => {
    const newData: any = await fetch(
      url,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      }
    );
    const processed = await newData.json();
    return processed;  
  }
  
  
  
}

export const MainWebWorker = new WebWorker;