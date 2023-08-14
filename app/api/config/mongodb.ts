import mongoose from 'mongoose'

export const connectMongoDB = () => {
  const URI = process.env.MONGODB_URI

  if (!URI) {
    console.error('❌ MONGODB_URI not found in eviroment vaiables')
    process.exit(1)
  }

  try {
    return mongoose
      .connect(URI)
      .then(connect =>
        console.log('✅ Database connected: 🚀 ', connect.connection.host)
      )
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
