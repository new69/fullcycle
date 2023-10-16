import Address from "./address";
import Customer from "./customer";

describe('Customer unit test', () => {
  it('should throw error when id is empty', () => {
    expect(() => {
      new Customer('', 'name')
    }).toThrowError('Id is required');
  });

  it('should throw error when name is empty', () => {
    expect(() => {
      new Customer('123', '')
    }).toThrowError('Name is required');
  });

  it('should change name', () => {
    let customer = new Customer('123', 'name');
    customer.changeName('new name');
    expect(customer.name).toBe('new name');
  });

  it('should activate customer', () => {
    const customer = new Customer('1', 'Customer 1');
    const address = new Address('Rua dois', 2, '12345-678', 'São Paulo');
    customer.Address = address;

    customer.activate();

    expect(customer.isActive()).toBe(true);
  });

  it('should throw error when address is undefined when you activate a customer', () => {
    expect(() => {
      const customer = new Customer('1', 'Customer 1');
      customer.activate();
    }).toThrowError('Address is mandatory to activate a customer');
  });

  it('should deactivate customer', () => {
    const customer = new Customer('1', 'Customer 1');

    customer.deactivate();

    expect(customer.isActive()).toBe(false);
  });
});
