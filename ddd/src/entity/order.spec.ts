import Order from "./order";
import OrderItem from "./order_item";

describe('Order unit test', () => {
  
  it('should throw error when id is empty', () => {
    expect(() => {
      new Order('', '1', []);
    }).toThrowError('Id is required');
  });

  it('should throw error when customerId is empty', () => {
    expect(() => {
      new Order('123', '', []);
    }).toThrowError('CustomerId is required');
  });

  it('should throw error when order item is empty', () => {
    expect(() => {
      new Order('123', '123', []);
    }).toThrowError('Item are required');
  });

  it('should calculate total', () => {
    const item = new OrderItem('i1', 'item 1', 100, 'p1', 2);
    const item2 = new OrderItem('i2', 'item 2', 200, 'p2', 2);
   
    const order = new Order('o1', 'c1', [item]);

    const total = order.total();

    expect(total).toBe(200);

    const order2 = new Order('o2', 'c2', [item, item2]);

    expect(order2.total()).toBe(600);
  });

  it('should check if the item qtd is less or equal zero', () => {
    expect(() => {
      const item = new OrderItem('i1', 'item 1', 100, 'p1', 0);
      new Order('o1', 'c1', [item]);
    }).toThrowError('Quantity must be greater than zero');
  });

});
