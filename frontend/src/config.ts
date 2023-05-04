export const settingList: {
  label: string
  name: string
  subFields: string[] | false
  type: 'text' | 'number' | 'textArea' | 'numeric'
  unit?: string
  placeholder?: string
}[] = [
  {
    label: 'タイヤサイズ',
    name: 'tireSize',
    subFields: ['Front', 'Rear'],
    type: 'text',
    placeholder: '215/45R 18 93W'
  },
  {
    label: 'タイヤ空気圧',
    name: 'airPressure',
    subFields: ['FrontLeft', 'FrontRight', 'RearLeft', 'RearRight'],
    type: 'numeric',
    unit: 'kpa',
    placeholder: '200'
  },
  {
    label: 'バネレート',
    name: 'springRate',
    subFields: ['Front', 'Rear'],
    type: 'numeric',
    unit: 'kg/mm',
    placeholder: '10'
  },
  {
    label: '車高',
    name: 'rideHeight',
    subFields: ['Front', 'Rear'],
    type: 'numeric',
    unit: 'mm',
    placeholder: '100'
  },
  {
    label: '減衰力',
    name: 'damperAdjustment',
    subFields: ['Front', 'Rear'],
    type: 'numeric',
    placeholder: '5'
  },
  {
    label: 'キャンバー角',
    name: 'camberAngle',
    subFields: ['Front', 'Rear'],
    type: 'number',
    unit: '°',
    placeholder: '-1.0'
  },
  {
    label: 'トー角',
    name: 'toeAngle',
    subFields: ['Front', 'Rear'],
    type: 'number',
    unit: '°',
    placeholder: '-1.0'
  },
  {
    label: 'ブースト圧',
    name: 'boostPressure',
    subFields: false,
    type: 'number',
    unit: 'kPa',
    placeholder: '1.0'
  },
  {
    label: 'リアスポイラ',
    name: 'rearSpoiler',
    subFields: false,
    type: 'textArea',
    placeholder: '調整値があれば入力してください'
  },
  {
    label: 'フリーテキスト',
    name: 'freeText',
    subFields: false,
    type: 'textArea',
    placeholder: 'その他メモがあれば入力してください'
  }
]
