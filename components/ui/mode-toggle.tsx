import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from '@/components/ui/button';

export function ModeToggle(){

    const { setTheme } = useTheme();

    const changeTheme = () => {
        const theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        setTheme(theme);
    }

    return(
        <Button onClick={changeTheme} variant='outline' size='icon' className="mx-1">
            <Sun className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
            <span className='sr-only'>Toggle theme</span>
        </Button>
    )
}