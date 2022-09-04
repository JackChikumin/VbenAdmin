export default {
  api: {
    operationFailed: 'Operation failed',
    Message: 'System Tip',
    errorTip: 'Error Tip',
    errorMessage: 'The operation failed, the system is abnormal!',
    timeoutMessage: 'Login timed out, please log in again!',
    apiTimeoutMessage: 'The interface request timed out, please refresh the page and try again!',
    apiRequestFailed: 'The interface request failed, please try again later!',
    networkException: 'network anomaly',
    networkExceptionMsg:
      'Please check if your network connection is normal! The network is abnormal',

    errMsg401: 'The user does not have permission (token, user name, password error)!',
    errMsg403: 'The user is authorized, but access is forbidden!',
    errMsg404: 'Network request error, the resource was not found!',
    errMsg405: 'Network request error, request method not allowed!',
    errMsg408: 'Network request timed out!',
    errMsg500: 'Server error, please contact the administrator!',
    errMsg501: 'The network is not implemented!',
    errMsg502: 'Network Error!',
    errMsg503: 'The service is unavailable, the server is temporarily overloaded or maintained!',
    errMsg504: 'Network timeout!',
    errMsg505: 'The http version does not support the request!',

    deleteMsg: 'Are you sure you want to delete it?',
    operate: 'Operate',
    delete: 'Delete',
    editor: 'Edit',
    upload: 'Upload',
    search: 'Search',
    add: 'Add',
    autoHeight: 'Adaptive height',
    cannelHeight: 'Cancel adaptation',
    enable: 'Enable',
    disable: 'Disable',
    upload_success: 'Upload success!',
    upload_error: 'Upload failed!',
    add_user: 'Add user',
    edit_user: 'Edit user',
    yes: 'Yes',
    no: 'No',
    online: 'online',
    noline: 'offline',
    hot: 'active',
    add_error: 'Add failed!',
    add_success: 'Added successfully!',
    edit_error: 'Edit failed!',
    edit_success: 'Modification succeeded!',
    delete_error: 'Deletion failed!',
    delete_success: 'Delete successful!',
  },
  app: {
    logoutTip: 'Reminder',
    logoutMessage: 'Confirm to exit the system?',
    menuLoading: 'Menu loading...',
  },
  errorLog: {
    tableTitle: 'Error log list',
    tableColumnType: 'Type',
    tableColumnDate: 'Time',
    tableColumnFile: 'File',
    tableColumnMsg: 'Error message',
    tableColumnStackMsg: 'Stack info',

    tableActionDesc: 'Details',

    modalTitle: 'Error details',

    fireVueError: 'Fire vue error',
    fireResourceError: 'Fire resource error',
    fireAjaxError: 'Fire ajax error',

    enableMessage: 'Only effective when useErrorHandle=true in `/src/settings/projectSetting.ts`.',
  },
  exception: {
    backLogin: 'Back Login',
    backHome: 'Back Home',
    subTitle403: "Sorry, you don't have access to this page.",
    subTitle404: 'Sorry, the page you visited does not exist.',
    subTitle500: 'Sorry, the server is reporting an error.',
    noDataTitle: 'No data on the current page.',
    networkErrorTitle: 'Network Error',
    networkErrorSubTitle:
      'Sorry，Your network connection has been disconnected, please check your network!',
  },
  lock: {
    unlock: 'Click to unlock',
    alert: 'Lock screen password error',
    backToLogin: 'Back to login',
    entry: 'Enter the system',
    placeholder: 'Please enter the lock screen password or user password',
    charging: 'Charging',
    battery: 'be filled',
    uncharging: 'Power disconnected',
    calcDischargingTime: 'Remaining available time: {0}',
    uncalcDischargingTime: 'When the battery is fully charged: {0}',
    hour: '{0}Hour',
    minute: '{0}minute',
    year: '{0}Year',
    month: '{0}Month',
    day: '{0}Day',
  },
  login: {
    backSignIn: 'Back sign in',
    mobileSignInFormTitle: 'Mobile sign in',
    qrSignInFormTitle: 'Qr code sign in',
    signInFormTitle: 'Sign in',
    signUpFormTitle: 'Sign up',
    forgetFormTitle: 'Reset password',

    signInTitle: 'Backstage management system',
    signInDesc: 'Enter your personal details and get started!',
    policy: 'I agree to the xxx Privacy Policy',
    scanSign: `scanning the code to complete the login`,

    loginButton: 'Sign in',
    registerButton: 'Sign up',
    rememberMe: 'Remember me',
    forgetPassword: 'Forget Password?',
    otherSignIn: 'Sign in with',

    // notify
    loginSuccessTitle: 'Login successful',
    loginSuccessDesc: 'Welcome back',

    // placeholder
    accountPlaceholder: 'Please input username',
    passwordPlaceholder: 'Please input password',
    smsPlaceholder: 'Please input sms code',
    mobilePlaceholder: 'Please input mobile',
    policyPlaceholder: 'Register after checking',
    diffPwd: 'The two passwords are inconsistent',

    userName: 'Username',
    password: 'Password',
    code: 'Please input verification code',
    confirmPassword: 'Confirm Password',
    email: 'Email',
    smsCode: 'SMS code',
    mobile: 'Mobile',

    system: 'System Version: {0}',
    browser: 'Browser Version: {0}',

    electron: 'Kernel Version: {0}',
    client: 'Client version: {0}',
  },
  darkMode: {
    light: 'The system has automatically switched you to the default theme!',
    dark: 'It is getting late, the system has automatically switched to night mode for you!',
  },
};