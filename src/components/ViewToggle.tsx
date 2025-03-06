import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch } from '@radix-ui/react-switch'
import { Users, Briefcase } from 'lucide-react'
import { toggleView } from '@/redux/slices/userSlice'
import { RootState } from '@/redux/store'

const ViewToggle: React.FC = () => {
  const dispatch = useDispatch()
  const isBusinessView = useSelector((state: RootState) => state.user.isBusinessView)

  return (
    <div className="flex items-center space-x-2">
      <Users size={20} />
      <Switch
        checked={isBusinessView}
        onCheckedChange={() => dispatch(toggleView())}
        className="bg-gray-600 w-11 h-6 rounded-full relative inline-flex items-center"
      >
        <span className={`${isBusinessView ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
      </Switch>
      <Briefcase size={20} />
    </div>
  )
}

export default ViewToggle