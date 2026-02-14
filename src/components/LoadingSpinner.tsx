interface LoadingSpinnerProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-4',
};

export default function LoadingSpinner({ className = '', size = 'md' }: LoadingSpinnerProps) {
    return (
        <div
            className={`animate-spin rounded-full border-slate-300 border-t-slate-900 ${sizeClasses[size]} ${className}`}
            role="status"
            aria-label="Loading"
        />
    );
}
