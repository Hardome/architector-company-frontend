'use client';

import React, {useState} from 'react';

import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
  payload?: {
    from?: string;
  };
}

const ContactDialog = ({isOpen, onClose, payload}: ContactDialogProps) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClose = () => {
    setPhone('');
    setName('');
    setError(null);
    onClose();
  };

  const handleSubmit = async(evt: React.FormEvent) => {
    evt.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

      if (!backendUrl) {
        throw new Error('NEXT_PUBLIC_BACKEND_URL не настроен');
      }

      const response = await fetch(`${backendUrl}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          phone,
          ...payload
        })
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке формы');
      }

      handleClose();
    } catch(err) {
      setError(
        err instanceof Error ? err.message : 'Произошла ошибка при отправке'
      );
      // eslint-disable-next-line no-console
      console.error('Error submitting form:', JSON.stringify(err));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={'text-3xl font-medium'}>{'Оставьте номер телефона'}</DialogTitle>
          <DialogDescription className={'text-base text-muted-foreground'}>
            {'Мы свяжемся с вами в ближайшее время'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className={'space-y-4'}>
          {
            error && process.env.NODE_ENV === 'development' && (
              <div className={'rounded-lg bg-red-50 p-3 text-sm text-red-600'}>
                {error}
              </div>
            )
          }
          <Input
            type={'text'}
            placeholder={'Имя'}
            value={name}
            onChange={(evt) => setName(evt.target.value)}
            required={true}
            disabled={isLoading}
            className={'rounded-lg'}
          />
          <Input
            type={'tel'}
            placeholder={'+7 (___) ___-__-__'}
            value={phone}
            onChange={(evt) => setPhone(evt.target.value)}
            required={true}
            disabled={isLoading}
            className={'rounded-lg'}
          />
          <p className={'text-xs text-gray-500 text-center'}>
            {'Я даю согласие на обработку персональных данных'}
          </p>
          <Button
            type={'submit'}
            disabled={isLoading}
            className={
              'w-full rounded-full ' +
                'hover:opacity-90 transition-opacity disabled:opacity-50 text-base'
            }
          >
            {isLoading ? 'Отправка...' : 'Отправить'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;