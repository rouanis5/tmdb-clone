'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Info } from 'lucide-react'
import { useEffect, useState } from 'react'
import config from '@/data/config.json'

const deleyInSeconds = 15

export default function Popup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, deleyInSeconds * 1000)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-x-2">
            <Info />
            <span>info</span>
          </DialogTitle>
          <DialogDescription>
            Would you like to learn more about the developer? Feel free to
            explore my portfolio
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <a href={config.PUBLIC_PORTFOLIO} target="_blank">
            <Button className="capitalize" variant="secondary" type="submit">
              explore portfolio
            </Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
