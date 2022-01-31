export const validateUUID = (base64StringOrUuid?: string) => {
    if (!base64StringOrUuid) {
      return '';
    }
    try {
      // base64 string decodes into json, then we parse and send back the last item which is the uuid.
      return JSON.parse(window.atob(base64StringOrUuid))[3] as string;
    } catch (e) {
      // if there is an error it's because the string is already a uuid an we can just let it through.
      console.warn('atob error with base64StringOrUuid: ', { base64StringOrUuid });
      return base64StringOrUuid;
    }
  };