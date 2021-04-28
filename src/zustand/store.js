import create from 'zustand'

const useStore = create(set => ({
  rotation: 0,
  setRotation: newRotation => set(() => ({ rotation: newRotation }))
}))

export default useStore