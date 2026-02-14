import { Component, type ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error('[ErrorBoundary]', error, info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback ?? (
                <div className="min-h-screen flex items-center justify-center p-8 text-center">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 mb-4">Something went wrong</h1>
                        <p className="text-slate-600 mb-6">{this.state.error?.message}</p>
                        <button
                            type="button"
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-slate-900 text-white rounded-lg font-bold hover:bg-slate-800"
                        >
                            Reload
                        </button>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}
