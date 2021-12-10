import { UserRequest } from './user-request';

describe('UserRequest', () => {
  const userData = new UserRequest();

  it('should create an instance', () => {
    expect(new UserRequest()).toBeTruthy();
  });

  it('name is accessible', () => {
    expect(userData.name).toEqual('');
    userData.name='Dmitry';
    expect(userData.name).toEqual('Dmitry');
  });

  it('login is accessible', () => {
    expect(userData.login).toEqual('');
    userData.login='Dmitry';
    expect(userData.login).toEqual('Dmitry');
  });

  it('pass is accessible', () => {
    expect(userData.sex).toEqual('');
    userData.sex='Dmitry';
    expect(userData.sex).toEqual('Dmitry');
  });

  it('age is accessible', () => {
    expect(userData.age).toEqual('');
    userData.age='123';
    expect(userData.age).toEqual('123');
  });

  it('email is accessible', () => {
    expect(userData.email).toEqual('');
    userData.email='Dmitry';
    expect(userData.email).toEqual('Dmitry');
  });

  it('phone is accessible', () => {
    expect(userData.phone).toEqual('');
    userData.phone='Dmitry';
    expect(userData.phone).toEqual('Dmitry');
  });

  it('msgText is accessible', () => {
    expect(userData.msgText).toEqual('');
    userData.msgText='Dmitry';
    expect(userData.msgText).toEqual('Dmitry');
  });

});
