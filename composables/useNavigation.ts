export default async function useNavigation(path:string) {
  try{
   await navigateTo(path)
   return
  }catch(err){
    return err
  }
} 