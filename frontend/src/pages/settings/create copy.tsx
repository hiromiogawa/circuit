import { useState, useEffect } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import checkAuth, { CheckAuthType } from '@/functions/fetch/auth/checkAuth'
import getMycars, { GetMycarType } from '@/functions/fetch/mycar/getMycars'
import getTireManufacturers from '@/functions/fetch/tireManufacturers/getTireManufacturers'
import getTires from '@/functions/fetch/tires/getTires'
import createSetting from '@/functions/fetch/settings/createSetting'

import SelectTire from '@/components/molecules/SelectTire'

import type { TireManufacturerType, TireType } from '@/types/data'

import { useRouter } from 'next/router'

// components
import Layout from '@/components/common/Layout'

type PropTypes = CheckAuthType & {
  myCars: GetMycarType[] | false
  tireManufacturers: TireManufacturerType[]
  tires: TireType[]
  initialMycar: string
}

const CreateSetting = ({
  isAuthenticated,
  myCars,
  tireManufacturers,
  tires,
  initialMycar
}: PropTypes) => {
  const [selectedMycar, setSelectedMycar] = useState<string>('')
  const [selectedTire, setSelectedTire] = useState<string>('')
  const [tireSizeFront, setTireSizeFront] = useState<string>('')
  const [tireSizeRear, setTireSizeRear] = useState<string>('')
  const [airPressureFront, setAirPressureFront] = useState<string>('')
  const [airPressureRear, setAirPressureRear] = useState<string>('')
  const [springRateFront, setSpringRateFront] = useState<string>('')
  const [springRateRear, setSpringRateRear] = useState<string>('')
  const [rideHeightFront, setRideHeightFront] = useState<string>('')
  const [rideHeightRear, setRideHeightRear] = useState<string>('')
  const [damperAdjustmentFront, setDamperAdjustmentFront] = useState<string>('')
  const [damperAdjustmentRear, setDamperAdjustmentRear] = useState<string>('')
  const [camberAngleFront, setCamberAngleFront] = useState<string>('')
  const [camberAngleRear, setCamberAngleRear] = useState<string>('')
  const [toeAngleFront, setToeAngleFront] = useState<string>('')
  const [toeAngleRear, setToeAngleRear] = useState<string>('')
  const [rearSpoiler, setRearSpoiler] = useState<string>('')
  const [boostPressure, setBoostPressure] = useState<string>('')
  const [freeText, setFreeText] = useState<string>('')

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(selectedTire)
    console.log(selectedMycar)
    e.preventDefault()
    const data = {
      tireId: selectedTire,
      mycarId: selectedMycar,
      selectedTire,
      freeText,
      tireSizeFront,
      tireSizeRear,
      airPressureFront,
      airPressureRear,
      springRateFront,
      springRateRear,
      rideHeightFront,
      rideHeightRear,
      damperAdjustmentFront,
      damperAdjustmentRear,
      camberAngleFront,
      camberAngleRear,
      toeAngleFront,
      toeAngleRear,
      rearSpoiler,
      boostPressure
    }
    const result = await createSetting(data)
    if (!result) {
      console.error('Failed to create setting')
    } else {
      console.log('Setting created successfully')
      router.push(`/settings/${result.data._id}`)
    }
  }

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    } else {
      setSelectedMycar(initialMycar)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return null
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        {myCars && (
          <select
            value={initialMycar}
            onChange={(e) => setSelectedMycar(e.target.value)}
          >
            <option value="">マイカーを選択してください</option>
            {myCars.map((myCar) => (
              <option key={myCar._id} value={myCar._id}>
                {myCar.car.name} {myCar.car.modelName}
              </option>
            ))}
          </select>
        )}

        <div>
          <p>タイヤ</p>
          <SelectTire
            tires={tires}
            tireManufacturers={tireManufacturers}
            setSelectedTire={setSelectedTire}
          />
        </div>
        <div>
          <p>タイヤサイズ</p>
          <label>
            フロント
            <input
              type="text"
              value={tireSizeFront}
              onChange={(e) => setTireSizeFront(e.target.value)}
            />
          </label>
          <label>
            リア
            <input
              type="text"
              value={tireSizeRear}
              onChange={(e) => setTireSizeRear(e.target.value)}
            />
          </label>
        </div>
        <div>
          <p>タイヤ空気圧</p>
          <label>
            フロント
            <input
              type="text"
              value={airPressureFront}
              onChange={(e) => setAirPressureFront(e.target.value)}
            />
          </label>
          <label>
            リア
            <input
              type="text"
              placeholder="空気圧リア"
              value={airPressureRear}
              onChange={(e) => setAirPressureRear(e.target.value)}
            />
          </label>
        </div>
        <div>
          <p>バネレート</p>
          <label>
            フロント
            <input
              type="text"
              placeholder="バネレートフロント"
              value={springRateFront}
              onChange={(e) => setSpringRateFront(e.target.value)}
            />
          </label>
          <label>
            リア
            <input
              type="text"
              placeholder="バネレートリア"
              value={springRateRear}
              onChange={(e) => setSpringRateRear(e.target.value)}
            />
          </label>
        </div>
        <div>
          <p>車高</p>
          <label>
            フロント
            <input
              type="text"
              value={rideHeightFront}
              onChange={(e) => setRideHeightFront(e.target.value)}
            />
          </label>
          <label>
            リア
            <input
              type="text"
              value={rideHeightRear}
              onChange={(e) => setRideHeightRear(e.target.value)}
            />
          </label>
        </div>
        <div>
          <p>減衰力</p>
          <label>
            フロント
            <input
              type="text"
              value={damperAdjustmentFront}
              onChange={(e) => setDamperAdjustmentFront(e.target.value)}
            />
          </label>
          <label>
            リア
            <input
              type="text"
              value={damperAdjustmentRear}
              onChange={(e) => setDamperAdjustmentRear(e.target.value)}
            />
          </label>
        </div>
        <div>
          <p>キャンバー角</p>
          <label>
            フロント
            <input
              type="text"
              value={camberAngleFront}
              onChange={(e) => setCamberAngleFront(e.target.value)}
            />
          </label>
          <label>
            リア
            <input
              type="text"
              value={camberAngleRear}
              onChange={(e) => setCamberAngleRear(e.target.value)}
            />
          </label>
        </div>
        <div>
          <p>トー角</p>
          <label>
            フロント
            <input
              type="text"
              value={toeAngleFront}
              onChange={(e) => setToeAngleFront(e.target.value)}
            />
          </label>
          <label>
            リア
            <input
              type="text"
              value={toeAngleRear}
              onChange={(e) => setToeAngleRear(e.target.value)}
            />
          </label>
        </div>
        <div>
          <p>リアスポイラ</p>
          <input
            type="text"
            value={rearSpoiler}
            onChange={(e) => setRearSpoiler(e.target.value)}
          />
        </div>
        <div>
          <p>ブースト圧</p>
          <input
            type="text"
            value={boostPressure}
            onChange={(e) => setBoostPressure(e.target.value)}
          />
        </div>

        <textarea
          onChange={(e) => setFreeText(e.target.value)}
          value={freeText}
          placeholder="フリーテキスト (オプション)"
        ></textarea>

        <button type="submit" disabled={!selectedMycar && !selectedTire}>
          設定を追加
        </button>
      </form>
    </Layout>
  )
}

export default CreateSetting

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const [authResult, myCarsData, tireManufacturersData, tiresData] =
    await Promise.all([
      checkAuth(context),
      getMycars(context),
      getTireManufacturers(),
      getTires()
    ])

  const initialMycar = context.query.mycar || ''

  return {
    props: {
      myCars: myCarsData,
      tireManufacturers: tireManufacturersData,
      initialMycar,
      tires: tiresData,
      ...authResult
    }
  }
}
