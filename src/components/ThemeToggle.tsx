import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch } from '@radix-ui/react-switch'
import { Sun, Moon } from 'lucide-react'
import { toggleTheme } from '@/redux/slices/themeSlice'
import { RootState } from '@/redux/store'

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch()
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)

  return (
    <div className="flex items-center space-x-2">
      <Sun size={20} />
      <Switch
        checked={isDarkMode}
        onCheckedChange={() => dispatch(toggleTheme())}
        className="bg-gray-600 w-11 h-6 rounded-full relative inline-flex items-center"
      >
        <span className={`${isDarkMode ? 'translate-x-6' : 'translate-x-1'} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`} />
      </Switch>
      <Moon size={20} />
    </div>
  )
}

export default ThemeToggle