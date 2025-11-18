'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

// 1. Schema validate cho Login
const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Vui lòng nhập Email')
    .email('Email không đúng định dạng'),
  password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
});

//  2. Kiểu dữ liệu
type LoginFormValues = z.infer<typeof loginSchema>;

export default function CardLogin() {
  // 3. Khởi tạo form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  //  4. Submit thành công, xử lí đăng nhập ở dây gọi api,......
  const onSubmit = (data: LoginFormValues) => {
    console.log('Dữ liệu đăng nhập:', data);
    alert('Đăng nhập thành công!');
  };

  return (
    <div>
      <Card className="w-full max-w-sm mx-auto transform translate-y-65/100">
        <CardHeader>
          <CardTitle>Đăng nhập tài khoản của bạn</CardTitle>
          <CardDescription>
            Nhập email và mật khẩu của bạn để đăng nhập
          </CardDescription>

          <CardAction>
            <Button variant="link" className="cursor-pointer">
              <Link href="/sign-up">Đăng Kí</Link>
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          {/*  Dùng handleSubmit để validate */}
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex flex-col gap-6">
              {/* EMAIL */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  autoComplete="off"
                  {...register('email')}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* PASSWORD */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Quên mật khẩu?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Nhập mật khẩu..."
                  autoComplete="off"
                  {...register('password')}
                />
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <Button type="submit" className="w-full cursor-pointer mt-4">
              Đăng Nhập
            </Button>
          </form>
        </CardContent>

        <CardFooter />
      </Card>
    </div>
  );
}
