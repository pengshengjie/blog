class Controller {
  @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
  getList() {}
}

const Get =
  (url: string): MethodDecorator =>
  (target, propertyKey, descriptor) => {
    const fnc = descriptor.value;
    axios.get(url).then((res) => {
      fnc(res.data);
    });
  };
