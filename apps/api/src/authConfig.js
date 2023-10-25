const passportConfig = {
  credentials: {
    tenantID: process.env.VITE_TENANT_ID,
    clientID: process.env.VITE_CLIENT_ID,
  },
  metadata: {
    authority: 'login.microsoftonline.com',
    discovery: '.well-known/openid-configuration',
    version: 'v2.0',
  },
  settings: {
    validateIssuer: true,
    passReqToCallback: true,
    loggingLevel: 'info',
    loggingNoPII: true,
  },
  protectedRoutes: {
    todolist: {
      endpoint: '/api/todolist',
      delegatedPermissions: {
        read: ['Todolist.Read', 'Todolist.ReadWrite'],
        write: ['Todolist.ReadWrite'],
      },
      applicationPermissions: {
        read: ['Todolist.Read.All', 'Todolist.ReadWrite.All'],
        write: ['Todolist.ReadWrite.All'],
      },
    },
  },
};

console.log({ passportConfig });

module.exports = passportConfig;
