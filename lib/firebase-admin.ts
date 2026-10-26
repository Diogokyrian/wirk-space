import "server-only";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const rawPrivateKey = process.env.FIREBASE_PRIVATE_KEY;


const privateKey = rawPrivateKey
  ? rawPrivateKey.replace(/^["']|["']$/g, "").replace(/\\n/g, "\n")
  : undefined;

const adminApp =
  getApps()[0] ??
  initializeApp({
    credential: cert({
      projectId: "wirkspace",
      clientEmail:'firebase-adminsdk-fbsvc@wirkspace.iam.gserviceaccount.com',
      privateKey:"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDA0tmR095NVlpO\ndzXN3R4DDWx/HKc3L4MzabNr5ZjAR83J/fqE9ny2GUMZ5yLplkzpZwIPPSMAvHCz\n9xTfCiwo5Nit+X3SxEIjxbLldXc/bSU6xRhMpKZQ5VWytSVKLYRZIOBNEtKFDpgr\nb441CuZfy+EoAd0exVkUY8hali0ZvRebBOHhf38+BivFRrtCXLR5N4m7uf8qDqCs\nclpu/InBRCaWGeeRPu3fQfZmG1U8eZCnGNvJKH209dIgLS20HaOJsfb8OVHK113q\nLbaP3LLxWw4mp/aR8zPmOjwbUbOR4TEU7EY2CIG2uQrPkX7yCleu1xMhKyuef38f\nrdr/++LpAgMBAAECggEAB2TOZPIb1xlVkyatEHzHFtTf8SvXGZ2fyUvnTl7acZ0P\nPgyYG5scAxuK4CZlx1E1F8oUYSM2AWQ4ah4yVa8dLGBCEsG7WmaeJqMBDh1n+i2k\nPNGr8dxqaDWzCIw7ptGB/qztDOeI3QNHQHshl9UYKlo2AwO3R+PHW6nL1/VkO1Vc\nxSa0pP3nGXyxGuezHFGzXpPfHDB1IHvsc69bkRmcGEWRsrU+f2mFhfaZA4ZxNMxm\n8cFHV1bIhyr6jmsCIQNiFSWaN2W249+ZQFZ4IdtTZlcBMgNYK2c2AvSNxv1CIoBv\nQbyML84A4N99l/e8J2nLDJK0TZ6TBQHshG295w87kQKBgQDyMYqq3Dh1kvzQEyn+\nuTiDRl04hr9o5Bkf99nIE5VR061N1Y5PIo8OUjS76aNdMopcnijKuJ4KD+9mXePs\nsvdy+FyoLEWFQ7zHdiiiYl4d7ixJRwkFcb5+j8AqSYjozIX13EPv9NnYSIsG7QX7\nYlD+aQ2YIC+fKURlPCAFTddAPQKBgQDL0NPHmviWneqiiWJP8KkqJCiv8Kr+fhWZ\nMbZKzCfV1s32Kha6sh+HlmlST7N9Do72SRfjXSJ0qxXu7Wvvm6JcHTuzj+ILUmMb\nTGu3Vzbw7vifE+1dCDpE2yf9ScitdOw3o3ACr2L0HSfA6NPUVFbLBj6+6xfNspAB\n6df2ap3MHQKBgAH8+iBw8l20uTKUFbIrnxUkzLscEBIyXSpwBG+qCX3EeRW8fRCV\nPgtmDVzFjDvFoHEmMzuGzHVUsChs+OQGjBV7iHcw9dkkNzaD981tdUxVmjN3y9Ep\nn+C2GWO/eso+c5MTHdOodOlbnxiNdZEcu4F7J0tqaDmsQw15suGYQ/4ZAoGAGV4j\njduHB1AebR6GYwbEN1+KxONClSxiSc/7LXIdnyr+NZ5ld9VFwV2CPGF5KJ6QQq00\nUPM9n6HPuA5K+ea4HZjx3laRPvGBLlujqI0tZG2J+lrDl2m3vuw8HPV7CcPcxswL\n2/myaknasdMI0ouwxdJAKwkdzFdmPya4343DmC0CgYAxq5TqLfTSxD+GyI7oLBKE\ndI/FFe53U4ZdSSZT43eeAucuE+MV0zIjBPSshT7lLmJ2rBJb3wS3fBxTjG2Wv21W\nOqKbvn8Uh7AY86XnvokEuPSI0rJdGXIAO0c1deQID3UBZTRNAuEUBlaqCGR+xX7F\nYT1C8c6LCoXckeuUJx+thw==\n-----END PRIVATE KEY-----\n",
    }),
  });

export const adminAuth = getAuth(adminApp);