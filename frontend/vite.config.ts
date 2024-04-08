import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }: { mode: any }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    define: {
      "process.env": env,
    },
    plugins: [react()],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/components/index.ts'),
        name: 'ChatWidgetLib',
        // Формат файла для вывода
        formats: ['es', 'umd'],
        fileName: (format) => `chat-widget-ts-lib.${format}.js`,
      },
      rollupOptions: {
        //Убедитесь, что внешние зависимости не включены в бандл.
        //external: ['react', 'react-dom'],
        output: {
          // Глобальные переменные для использования в бандле.
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM'
          }

        }
      }
    }
  })
}
