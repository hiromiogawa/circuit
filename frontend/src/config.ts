export const settingList: {
  label: string
  name: string
  subFields: string[] | false
}[] = [
  {
    label: 'タイヤサイズ',
    name: 'tireSize',
    subFields: ['Front', 'Rear']
  },
  {
    label: 'タイヤ空気圧',
    name: 'airPressure',
    subFields: ['FrontLeft', 'FrontRight', 'RearLeft', 'RearRight']
  },
  {
    label: 'バネレート',
    name: 'springRate',
    subFields: ['Front', 'Rear']
  },
  {
    label: '車高',
    name: 'rideHeight',
    subFields: ['Front', 'Rear']
  },
  {
    label: '減衰力',
    name: 'damperAdjustment',
    subFields: ['Front', 'Rear']
  },
  {
    label: 'キャンバー角',
    name: 'camberAngle',
    subFields: ['Front', 'Rear']
  },
  {
    label: 'トー角',
    name: 'toeAngle',
    subFields: ['Front', 'Rear']
  },
  {
    label: 'リアスポイラ',
    name: 'rearSpoiler',
    subFields: false
  },
  {
    label: 'ブースト圧',
    name: 'boostPressure',
    subFields: false
  },
  {
    label: 'フリーテキスト',
    name: 'freeText',
    subFields: false
  }
]
