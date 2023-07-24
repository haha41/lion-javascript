

export function copy(text){
  return navigator.clipboard.writeText(text) // text의 내용을 클립보드에 기록
}