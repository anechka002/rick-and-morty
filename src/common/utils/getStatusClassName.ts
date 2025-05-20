export const getStatusClassName = (status: string) => {
  let characterStatus;
  switch (status) {
    case 'Alive':
      characterStatus = 'bg-green-500'
      break;
    case 'Dead':
      characterStatus = 'bg-red-600'
      break;
    case 'unknown':
      characterStatus = 'bg-slate-200'
      break;
    default:
      characterStatus = ''
  }
  return `h-2.5 w-2.5 mr-2.5 rounded-full ${characterStatus}`;
}